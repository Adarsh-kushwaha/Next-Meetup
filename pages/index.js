import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://th.bing.com/th/id/OIP.3hG54MrImuCU6MYZ63qoBQHaE8?pid=ImgDet&rs=1",
    desc: "This is first meetup that you should atennd",
    address: "213/1 Hathai kheda road anand nagar bhopal"
  },
  {
    id: "m2",
    title: "First meetup",
    image: "https://th.bing.com/th/id/OIP.3hG54MrImuCU6MYZ63qoBQHaE8?pid=ImgDet&rs=1",
    desc: "This is first meetup that you should atennd",
    address: "213/1 Hathai kheda road anand nagar bhopal"
  },
  {
    id: "m3",
    title: "First meetup",
    image: "https://th.bing.com/th/id/OIP.3hG54MrImuCU6MYZ63qoBQHaE8?pid=ImgDet&rs=1",
    desc: "This is first meetup that you should atennd",
    address: "213/1 Hathai kheda road anand nagar bhopal"
  }
]

function homePage(props) {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUP} />
    </>
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect("mongodb+srv://adarshkushwaha:adarsh360@cluster0.w09vm.mongodb.net/meetups?retryWrites=true&w=majority")
  const db = client.db();
  const meetupsCollection = db.collection("meetups")
  const meetups = await meetupsCollection.find.toArray();
  client.close()
  return {
    props: {
      meetups: meetups.map((meetup)=>({
        title:meetup.title,
        address: meetup.address,
        image:meetup.image

      }))
    },
    revalidate: 1
  }
}

export default homePage;