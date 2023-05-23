import { Button, Spinner } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import '../stylesheets/PostSales.css'

function PostSales() {
    useEffect(()=>{document.title="PostSales - Sales Commission Calculator"},[])
    
    const [file, setFile] = useState(null);
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(file) {
            setLoading(true);
            fetch(`http://localhost:8080/sales`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })            
            .then( response => {
                if(response.ok) {
                    console.log('Data posted');
                    toast.success("File Uploaded!", {
                        position: "top-center",
                    });
                }
                else {
                    console.log("error uploading");
                    toast.error("Error uploading", {
                        position: "top-center"
                    });
                }
                setLoading(false);
            } )
            .catch(error => {
                console.log('error posting data: ',error)
                toast.error("Error uploading file!", {
                    position: "top-center",
                });       
                setLoading(false);     
            })
        }
        else {
            toast.warn("Please select a file first!", {
                position: "top-center",
            });
        }
    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        const reader=new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                setdata(data);
                console.log(data);
            } catch(error) {
                toast.error("The selected file could not be parsed", {
                    position: "top-center"});
                console.log(error);
            }
        };
        reader.readAsText(event.target.files[0]);
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label class="drop-container">
                    <span class="drop-title">Drop file here</span>
                    or
                    <input type="file" onChange={handleFileChange} accept="text/plain"/>
                </label>
                <Button type="submit" color="primary" style={{marginTop:'20px'}} > 
                {loading ?<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : "Upload"}
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
}
export default PostSales;