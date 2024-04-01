import { storage, ref, uploadBytesResumable, getDownloadURL, db, collection, addDoc } from "../../config/Firebase/index.js"

export const uploadFile = (file) => {
    console.log(file)
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, `checkIns/${file.name}`);
        const uploadTask = uploadBytesResumable(mountainsRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    })
}

export const AddData = async (title, image) => {
    const docRef = await addDoc(collection(db, "checkIns"), {
        title: title,
        image: image,
        timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
}