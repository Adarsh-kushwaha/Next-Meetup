import MeetupDetail from "../../components/meetups/MeetupDetail";

function singleMeetupDetailPage() {
    return (
        <>
            <MeetupDetail image="https://th.bing.com/th/id/OIP.fmk7LHGUjmy5h894aZve5QHaE7?pid=ImgDet&rs=1"
                title="First meetup"
                id="m1"
                description="description"
                address="test"
            />
        </>
    )
}

export function getStaticPaths() {
    return {
        fallback:false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                }
            },
            {
                params: {
                    meetupId: "m2",
                }
            }
        ]
    }
}

export function getStaticProps(context) {
    const meetupId = context.params.meetupId
    return {
        props: {
            meetupData: {
                image: "https://th.bing.com/th/id/OIP.fmk7LHGUjmy5h894aZve5QHaE7?pid=ImgDet&rs=1",
                title: "First meetup",
                id: meetupId,
                description: "description",
                address: "test"
            },

        }
    }
}

export default singleMeetupDetailPage;