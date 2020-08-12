// Model user
const UserSchema = mongoose.Schema({

    nome:{
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
}) 
// Importando model
mongoose.model('user', UserSchema)

var guto = mongoose.model('user')
// Criando novo documento
new guto({
    nome: "Gustavo",
    sobrenome: "Gomes",
    email: "email@email.com",
    idade: 20
}).save().then(() => {console.log("Usuario cadastrado")}).catch((error) => {console.log("Ocorreu algum erro" + error)})
