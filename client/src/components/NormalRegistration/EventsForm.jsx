import { useRef, useState } from "react";
import Form from "./Form";
import InputBox from "./InputBox";
import InputSelect from "./InputSelect";
import NormalButton from "./NormalButton";
import RadioGroup from "./RadioGroup";

const EventsForm = ({change,submit,add}) => {

    const[isEventCatSelected,setIsEventCatSelected] = useState(false);
    const[isEventNameSelected,setIsEventNameSelected] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState("Drama Events");
    const categoryOptions = {
        "Drama Events" : [
            "Padhiti",
            "Rangshala",
            "Mukata"
        ],
        "Art Events" : [
            "Colorama",
            "Contrasto",
            "Eclectic",
            "Tatoo Tales",
            "Splash"
        ],
        "Music Events" :[
            "Bandish",
            "Malhaar",
            "Battle of Bands",
            "Aaroh",
            "Gully War"
        ],
        "Quiz Events" :[
            "Bamboozled",
            "Football Auction"
        ],
        "Dance Events":[
            "Razzamatazz",
            "Let's Tangle",
            "Mudra",
            "Pump It Up"
        ],
        "Nukkad Events":[
            "Hunkaar"
        ],
        "Literary and Discussion Events":[
            "Open Discussion",
            "Dare to Spell",
            "Potpourii"
        ],
        "Photography & Videography Events":[
            "Kalakriti",
            "Photography Contest",
            "Imagination Workshop",
            "Reel Making",
            "Photo Booth",
            "Image Hunt"
        ],
        "Fashion Events":[
            "Vogue"
        ]
    }
    const [options,setOptions] = useState(categoryOptions);

    const eventNameRef = useRef();
    const teamDetailsRef = useRef();

    const handleCategorySelected = (e) => {
        change(e)
        if (e.target.value){
            setIsEventCatSelected(true);
            setSelectedCategory(e.target.value);
            eventNameRef.current.classList.remove("hidden");
        }
        else{
            setIsEventCatSelected(false);
            eventNameRef.current.classList.add("hidden");
        }
    }

    const handleEventNameSelected = (e) => {
        change(e)
        if (e.target.value){
            setIsEventNameSelected(true);
            console.log(e.target.value);
            
            teamDetailsRef.current.classList.remove("hidden");
            teamDetailsRef.current.classList.add("flex");
        }
        else{
            setIsEventNameSelected(false);
            teamDetailsRef.current.classList.remove("flex");
            teamDetailsRef.current.classList.add("hidden");
        }
    }

    return ( 
        <Form>
            <h1 className=" my-8 text-center font-grobold text-[#57E8E8] text-2xl tracking-wider leading-none md:text-4xl">
                Register for an Event
            </h1>
            <div className="flex flex-col gap-6 mb-6 ">
                <InputSelect 
                name="eventCategory"
                text="Event Category"
                options={["Drama Events","Art Events","Music Events","Quiz Events","Dance Events","Nukkad Events","Literary and Discussion Events","Photography & Videography Events","Fashion Events"]}
                change={handleCategorySelected}
                />
            </div>
            <div className="mb-6 hidden" ref={eventNameRef}>
                <InputSelect 
                name="eventName"
                text="Event Name" 
                options={options[selectedCategory]}
                change={handleEventNameSelected}
                />
            </div>
            <div className="mb-6 flex-col gap-6 hidden" ref={teamDetailsRef}>
                <InputBox name="teamSize" text="Team Size" change={change}/>

                <div className=" w-5/6 mx-auto">
                    <RadioGroup name="captain" 
                    change={change}
                    heading="Are you the team captain/coordinator ?"
                    options={["Yes","No"]}/>
                </div>
                
                <InputBox name="teamName" text="Team Name" change={change}/>
                <InputBox name="teamMembers" text="Team Members (optional)" change={change}/>
                <p className="text-white"><span className=" text-red-400">*</span> Enter member names seperated by comma</p>

                <div className="mx-auto w-5/6 flex justify-end pt-4 gap-4">
                    <NormalButton text= "Submit" name="submit" handler={submit}/>
                    <NormalButton text="Add Event" name="add" handler={add}/>
                </div>
            </div>
        </Form>
     );
}
 
export default EventsForm;