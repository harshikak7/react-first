import React from 'react'
import Card from './components/Card'

const App = () => {
  
  const jobs = [
  {
    id: 1,
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    posted: "2 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    posted: "1 week ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    posted: "3 days ago",
    post: "Visual Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    id: 5,
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    posted: "6 days ago",
    post: "UI Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Mumbai, India"
  },
  {
    id: 6,
    logo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    posted: "4 days ago",
    post: "Interaction Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Remote"
  },
  {
    id: 7,
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    posted: "1 day ago",
    post: "UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Pune, India"
  },
  {
    id: 8,
    logo: "https://logo.clearbit.com/flipkart.com",
    company: "Flipkart",
    posted: "2 weeks ago",
    post: "Product UI Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    id: 9,
    logo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    posted: "5 days ago",
    post: "Design Systems Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Remote"
  },
  {
    id: 10,
    logo: "https://logo.clearbit.com/zomato.com",
    company: "Zomato",
    posted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  }
  ];

  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card company={elem.company} post={elem.post} pay={elem.pay}/>
      })}
    </div>
  )
}

export default App
