import MeetupList from "../components/meetups/MeetupList"

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

function homePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUP} />
    </>
  )
}

export default homePage;