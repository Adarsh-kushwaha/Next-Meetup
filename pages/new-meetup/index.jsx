import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function newMeetupForm(){

    function addMeetupHandler(meetupData){
        console.log(meetupData)
    }

    return(
        <>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
}

export default newMeetupForm;