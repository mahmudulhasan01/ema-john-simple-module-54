
import React from 'react';
import './shiping.css'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Shiping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
  const onSubmit = data => {
      console.log(data);
    }
    return (
        <div className="siping">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                 <input defaultValue={user.displayName} {...register("name")} />
                 <input {...register("email", { required: true })} />

                {errors.email && <span className="error">email is required</span>}
      
                 <input type="submit" />
             </form>
        </div>
    );
};

export default Shiping;