import React from 'react'
import Head from './components/Head'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    id: 1,
    brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 40,
    location: "Bangalore, India"
  },
  {
    id: 2,
    brandLogo: "https://images.unsplash.com/photo-1636051028886-0059ad2383c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    id: 3,
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior",
    pay: 35,
    location: "Chennai, India"
  },
  {
    id: 4,
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    id: 5,
    brandLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/sddefault.jpg",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior",
    pay: 80,
    location: "Remote"
  },
  {
    id: 6,
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm2fTBsmdLVyzkj_nOPMwr-c8WW2h5fhM-w&s",
    company: "Uber",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 45,
    location: "Pune, India"
  },
  {
    id: 8,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREyKG6iBsnvQBs_h1bXw569AoLmPoDIemXQ&s",
    company: "Airbnb",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior",
    pay: 75,
    location: "Remote"
  },
  {
    id: 9,
    brandLogo: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
    company: "Spotify",
    datePosted: "2 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Mumbai, India"
  },
  {
    id: 10,
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=750&format=png&optimize=medium",
    company: "Adobe",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 42,
    location: "Noida, India"
  },
  {
    id: 11,
    brandLogo: "https://images.unsplash.com/photo-1662947774804-917520490b35?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    company: "Oracle",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    id: 12,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png",
    company: "Salesforce",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: 62,
    location: "Remote"
  },
  {
    id: 13,
    brandLogo: "https://staging.remoteworksource.com/wp-content/uploads/2018/08/Intuit.png",
    company: "Intuit",
    datePosted: "1 week ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 68,
    location: "Bangalore, India"
  },
  {
    id: 14,
    brandLogo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png",
    company: "PayPal",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: 57,
    location: "Chennai, India"
  },
  {
    id: 15,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
    company: "Stripe",
    datePosted: "6 days ago",
    post: "UI Developer",
    tag1: "Remote",
    tag2: "Senior",
    pay: 85,
    location: "Remote"
  },
  {
    id: 16,
    brandLogo: "https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg?semt=ais_hybrid&w=740&q=80",
    company: "X (Twitter)",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: 38,
    location: "Delhi, India"
  },
  {
    id: 17,
    brandLogo: "https://img.freepik.com/premium-vector/linkedin-logo-icon_1273375-1174.jpg?semt=ais_hybrid&w=740&q=80",
    company: "LinkedIn",
    datePosted: "9 days ago",
    post: "Web Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 63,
    location: "Bangalore, India"
  },
  {
    id: 18,
    brandLogo: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/sites/www.builtin.com/files/2023-09/sn-avatar.jpg",
    company: "Snap Inc",
    datePosted: "7 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: 72,
    location: "Remote"
  },
  
];

  return (
    <div className='flex flex-wrap ml-10 mr-10 mt-10 gap-3 '>
      {
        jobs.map(job=> (
          <Card key={job.id} job={job}/>
          )
        )
      }
    </div>
  )
}

export default App
