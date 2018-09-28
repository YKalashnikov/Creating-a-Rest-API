// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers/index')
/* const Contacts = require('../models/Contacts')
const Profile = require('../models/Profile') */

/*  This is a sample API route. */
/* const products =[{
	firstName:"Ales",lastName:"Bush",age:"44",city:"SD"
}]
const colors =[{
	first:"Boston",second:"NYC",third:"SD",fifth:"NH"
}]

const db = {
	products: products,
	colors: color
}  */
router.get('/:resource',(req,res)=> {
	const resource = req.params.resource
	const controller = controllers[resource]

	if(controller == null) {
		res.json({
			confirmation:'fail',
			message:'Invalid request'
		})
		return 
	}
	controller.get()
	.then(data => {
		res.json({
			confirmation:'success',
			data:data
		})
		.catch(err => {
			res.json({
				confirmation:'fail',
				message:err.message
			})
 
		})
	})
   
	router.get('/:resource/:id', (req, res) => {
		const resource = req.params.resource
		const id = req.params.id
		const controller = controllers[resource]

		if(controller == null){
			res.json({
				confirmation:'fail',
				message:'Invalid request'
			})
			return
		}
		controller.getById(id)
		.then(data => {
			res.json({
				confirmation:'success',
				data: data
			})
			.catch(err => {
				res.json({
					confirmation:'fail',
					message: err.message
				})
	 
			})
		})
	})









}) 
/* 
router.get('/contacts', (req,res) => {
	Contacts.find(null)
.then(data=>{
	res.json({confirmation:'success',
				data:data})
})
.catch(err=>{
	res.json({confirmation:'fail',
 	 		  message:err.message})
	
})
})

router.get('/profiles', (req,res) => {
	Profile.find(null)
.then(data=>{
	res.json({confirmation:'success',
				data:data})
})
.catch(err=>{
	res.json({confirmation:'fail',
 	 		  message:err.message})
	
})
}) */
 /* 
router.get('/:resource', (req,res)=> {
	const resource = req.params.resource;
	console.log(resource)

	const data = db[resource];
	if(data == null) {
		 res.json({
			 confirmation:'fail',
			 data:"Invalid equest. Resource undefined"
		 })
		 return 
	}
	res.json({
		confirmation:"success",
		data:data
	})
}) */
/* router.get('/contacts',(req,res)=>{
	res.json({
		confirmation:"legenda",
		name:{contacts}
	})
})
router.get('/city',(req,res)=>{
	res.json({
		name:{city}
	})
}) */

module.exports=router