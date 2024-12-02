import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
      console.log(newCoffee);

    //   send data to the server
    fetch('http://localhost:5000/coffee', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data => {
        // console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">AddCoffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>

                        <label className="input-group">
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="Coffee name" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>

                        <label className="input-group">
                            <input type="text" 
                            className="input input-bordered w-full"
                            name="quantity"
                             placeholder="Available Quantity" />
                        </label>
                    </div>

                </div>

                {/* form supplier row */}
                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" name="supplier" className="input input-bordered w-full" placeholder="Supplier name" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>

                        <label className="input-group">
                            <input type="text" 
                            className="input input-bordered w-full"
                            name="taste"
                             placeholder="Taste" />
                        </label>
                    </div>

                </div>

                {/* form category and details row */}
                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>

                        <label className="input-group">
                            <input type="text" name="category" className="input input-bordered w-full" placeholder="Category" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>

                        <label className="input-group">
                            <input type="text" 
                            className="input input-bordered w-full"
                            name="details"
                             placeholder="Details" />
                        </label>
                    </div>

                </div>

                {/* form photo url row */}
                <div className="mb-8">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>

                        <label className="input-group">
                            <input type="text" name="photo" className="input input-bordered w-full" placeholder="CatePhoto URL" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="add coffee" className="btn btn-block" />
                
            </form>
        </div>
    );
};

export default AddCoffee;