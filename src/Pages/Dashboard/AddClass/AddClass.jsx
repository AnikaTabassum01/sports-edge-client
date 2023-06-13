import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {

    const { register, handleSubmit } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        // console.log(data)

        
        const formData = new FormData();
        formData.append('image', data.formData[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { className, instructorName, seats, price } = data;
                    const allClass = { className, classImage:imgUrl, instructorName, seats, price: parseFloat(price) };
                    console.log(allClass);
                }
            })

    };

    return (
        <div className="mx-4">

            <h2 className="text-3xl font-bold my-8 ml-96">Add Class</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4">

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" {...register("class name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register(" image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" {...register("class name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" {...register("instructor email", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                </div>

                
                <div className="flex my-4">

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("Price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                </div>

                <input className="btn btn-sm btn-primary mt-4 ml-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;