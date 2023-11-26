import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Contact = () => {
    return ( 
    <div className="bg-blue-950 w-screen h-screen">
        <div className="flex h-screen">
        <div className="mt-10 w-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl border-b-4 border-blue-500 text-gray-300 mb-3">Contact</h1> 
                <form action="https://getform.io/f/bd2f1add-fe1a-4e34-aeab-d49d4517a04c" method="post" className="text-black flex flex-col space-y-3 w-1/2">
                    <input type="text" name='name' className="outline-none p-2 bg-gray-200" autoComplete="off" placeholder="Name"/>
                    <input type="email" name="email" className="outline-none p-2 bg-gray-200 " autoComplete="off" placeholder="Email"/>
                    <textarea name="message" id="" cols="30" rows="15" placeholder="Message" className="ourline-none p-2 bg-gray-200"></textarea>
                    <button type="submit" className="bg-transparent w-32 mx-auto text-gray-200 px-4 py-1 border hover:bg-blue-500 hover:border-blue-500">Message</button>
                </form>
        </div>
        </div>
    </div> 
    );
}
 
export default Contact;