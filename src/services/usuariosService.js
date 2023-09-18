import firebase from '../config/firebase';


export async function create(payload){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    console.log("🚀 ~ file: usuariosService.js:5 ~ create ~ responseUser:", responseUser.user.uid)
    const document = await firebase.firestore().collection("usuarios")
    .add({
        name: payload.nombre,
        lastname: payload.apellido,
        userId: responseUser.user.uid
    })
    console.log(document);
    return document;
}

export async function login(email,password){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email,password)
    if(responseUser.user.uid){
        const userDocument = await firebase.firestore().collection("usuarios")
        .where("userId","==",responseUser.user.uid)
        .get()

        return userDocument.docs[0].data()
    }
    return {}
}