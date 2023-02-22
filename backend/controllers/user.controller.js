const {MongoClient, Double} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = '#$*&%^&@#($(@'

function hasPassword(password){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

exports.getUser = async (req,res)=>{
  const cursor = await client.db("midtest").collection("username").find({})
  const result = await cursor.toArray()
  try {
    res.status(200).json({
        message: 'Tampil',
        status: true,
        user: result
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.postUser = async (req,res)=>{
    const {
        name,
        email,
        password,
        datebirth,
        phoneNumber,
        city
    } = req.body
    if(!name, !email, !datebirth, !phoneNumber, !city || !password) res.status(402).json({message: 'data wajib diisi'})
  
    try {
    const newData = {
      name : name,
      email : email,
      password : hasPassword(password),
      datebirth : datebirth,
      phoneNumber : new Double(phoneNumber),
      city: city
    }
    const result = await client.db("midtest").collection("username").insertOne(newData)

    res.status(200).json({
        message: 'Data berhasil ditambahkan',
        status: true,
        data: newData
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.login = async (req,res)=>{
    const {
        email,
        password
    } = req.body
    if( !email || !password) res.status(402).json({message: 'email dan password wajib diisi'})
  
    try {
        const cursor = await client.db("midtest").collection("username").find({email: email})
        const result = await cursor.toArray()

        result.map(((data, index) =>{ //harusnya mahasiswa2
            if(bcrypt.compareSync(password, data.password)){
                const token = jwt.sign({data}, secret)
                res.status(200).json({
                    message: 'Login berhasil',
                    token,
                    user: data
                })
            }else{
                res.status(401).json({message:'email atau password tidak sesuai'})
            }
        }))
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// exports.putMahasiswa = async (req,res)=>{
//   const id = new Double(req.params.id)
//   const newData = {
//     nama : req.body.nama,
//     alamat : req.body.alamat,
//     jurusan : req.body.jurusan,
//     gender : req.body.gender,
//     sertifikat : req.body.sertifikat,
//   }
//   const result = await client.db("midtest").collection("username").updateOne({id: id}, {$set: newData})
//   try {
//     res.status(200).json({
//         message: 'Data berhasil diupdate',
//         status: true,
//     })
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// exports.deleteMahasiswa = async (req,res)=>{
//   const id = new Double(req.params.id)
//   const result = await client.db("midtest").collection("username").deleteOne({id: id})
//   try {
//     res.status(200).json({
//         message: 'Data berhasil dihapus',
//         status: true,
//     })
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }