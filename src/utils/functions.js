// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme
import firebase from "./firebase"
import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove,update} from "firebase/database";

import { toastSuccessNotify, toastWarningNotify, toastInfoNotify} from "./toast";

// Adding info
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"baglanti");
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender,
    })
    toastSuccessNotify("User info was added")
}

//yukarıda, asagıdaki dokumantasyondan farklı olarak,userRef kullanıldı, çunku bunlar ayrı ayrı farklı yerlerde ullanılacak. 
// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// Get and fetching info

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"baglanti");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            setIsLoading(false);
        
        });
    },[])
    
    return {isLoading,contactList}

   
}

// Deleting info
export const DeleteUser=(id)=>{
        const db = getDatabase();
        const userRef=ref(db,"baglanti");
        remove(ref(db,"baglanti/"+id));
        toastWarningNotify("user info was deleted")


       
}

// Editing info

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["baglanti/"+info.id]=info;
    toastInfoNotify("user info was edited")

    
    return update(ref(db),updates);

   



}