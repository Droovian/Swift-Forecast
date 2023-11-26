import { useState } from "react";

const Contact = () => {

    const [isSubmitted, setisSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setIsLoading(true);
    
        try {
            const response = await fetch('https://getform.io/f/bd2f1add-fe1a-4e34-aeab-d49d4517a04c', {
                method: 'post',
            });
    
            console.log('Response Status:', response.status);
    
            if (response.ok) {
                console.log('Form submitted successfully!');
                setisSubmitted(true);
                setError(null);
            } else {
                const errorMessage = await response.text();
                alert(response, response.status);
                console.error(`Form submission failed. Status: ${response.status}, Message: ${errorMessage}`);
                setisSubmitted(false);
                setError('Form submission failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setisSubmitted(false);
            setError('Form submission failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return ( 
    <div className="bg-blue-950 w-screen h-screen">
        <div className="flex h-screen">
        <div className="mt-10 w-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl border-b-4 border-blue-500 text-gray-300 mb-3">Contact</h1> 
                {isSubmitted ? (
                        <p className="text-blue-300 mx-auto">Form submitted successfully!</p>
                    ) : (  <p className="text-red-500 mx-auto">{error}</p> )}
                <form action="https://getform.io/f/bd2f1add-fe1a-4e34-aeab-d49d4517a04c" method="post" className="text-black flex flex-col space-y-3 w-3/4 sm:w-1/2" onSubmit={handleSubmit}>
                    <input type="text" name='name' className="outline-none p-2 bg-gray-200" autoComplete="off" placeholder="Name" required/>
                    <input type="email" name="email" className="outline-none p-2 bg-gray-200 " autoComplete="off" placeholder="Email" required/>
                    <textarea name="message" id="" cols="30" rows="15" placeholder="Message" className="ourline-none p-2 bg-gray-200" required></textarea>
                    <button type="submit" className="bg-transparent w-32 mx-auto text-gray-200 px-4 py-1 border hover:bg-blue-500 hover:border-blue-500"
                    disabled={isLoading}>Message</button>
                    {isLoading ? <p className="mx-auto text-blue-300">Sending...</p> : null}
                </form>
                    
        </div>
        </div>
    </div> 
    );
}
 
export default Contact;