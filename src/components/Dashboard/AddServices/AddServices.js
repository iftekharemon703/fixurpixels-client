import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'c5ad40e7d62ccba33fad67c5de1000a4')
        imageData.append('image', event.target.files[0]) 
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const onSubmit = data => {
        if (imageUrl === null) {
            alert('Please Wait for image uploading')
        }
        else {
            const newService = { ...data, image: imageUrl }
            fetch('https://fathomless-caverns-04079.herokuapp.com/addService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Thanks for Added Service')
                        window.location.reload()
                    }
                })
        }
    };

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 p-5">
                        <input className="form-control mb-3" type="text" placeholder="Enter Your Title" {...register("name", { required: true })} />

                        <input className="form-control mb-3" type="text" placeholder="Price" {...register("price", { required: true })} />

                        <textarea className="form-control mb-3" placeholder="Enter Your Description" {...register("description", { required: true })} />

                        <input onChange={handleImageUpload} type="file" className="form-control mb-3"/>

                        <input className="btn-brand text-white py-2 px-3" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddServices;