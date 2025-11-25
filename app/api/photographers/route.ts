import { NextResponse } from 'next/server';

const photographers = [
  {
    id: 1,
    name: "Ravi Studio",
    location: "Bengaluru",
    price: 10000,
    rating: 4.6,
    styles: ["Outdoor", "Studio"],
    tags: ["Candid", "Maternity"],
    bio: "Award-winning studio specializing in maternity and newborn shoots.",
    profilePic: "https://picsum.photos/300/300?random=1",
    portfolio: ["https://picsum.photos/600/400?random=11", "https://picsum.photos/600/400?random=12"],
    reviews: [
      {
        name: "Ananya",
        rating: 5,
        comment: "Truly amazing photos and experience!",
        date: "2024-12-15"
      }
    ]
  },
  {
    id: 2,
    name: "Lens Queen Photography",
    location: "Delhi",
    price: 15000,
    rating: 4.2,
    styles: ["Candid", "Indoor"],
    tags: ["Newborn", "Birthday"],
    bio: "Delhi-based candid specialist for kids and birthday parties.",
    profilePic: "https://picsum.photos/300/300?random=2",
    portfolio: ["https://picsum.photos/600/400?random=21", "https://picsum.photos/600/400?random=22"],
    reviews: [
      {
        name: "Priya",
        rating: 4,
        comment: "Very professional and punctual!",
        date: "2024-10-01"
      }
    ]
  },
  {
    id: 3,
    name: "Click Factory",
    location: "Mumbai",
    price: 8000,
    rating: 4.8,
    styles: ["Studio", "Outdoor", "Traditional"],
    tags: ["Wedding", "Pre-wedding"],
    bio: "Capturing timeless wedding stories across India.",
    profilePic: "https://picsum.photos/300/300?random=3",
    portfolio: ["https://picsum.photos/600/400?random=31", "https://picsum.photos/600/400?random=32"],
    reviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "We loved every single moment they captured.",
        date: "2025-01-22"
      }
    ]
  },
  {
    id: 4,
    name: "Moments by Khushi",
    location: "Bengaluru",
    price: 12000,
    rating: 4.3,
    styles: ["Outdoor", "Candid"],
    tags: ["Maternity", "Couple"],
    bio: "Natural light specialist focusing on emotional storytelling.",
    profilePic: "https://picsum.photos/300/300?random=4",
    portfolio: ["https://picsum.photos/600/400?random=41", "https://picsum.photos/600/400?random=42"],
    reviews: [
      {
        name: "Sneha",
        rating: 4.5,
        comment: "Captured our maternity journey so beautifully.",
        date: "2024-11-05"
      }
    ]
  },
  {
    id: 5,
    name: "Snapshot Studio",
    location: "Hyderabad",
    price: 7000,
    rating: 3.9,
    styles: ["Studio"],
    tags: ["Birthday", "Family"],
    bio: "Affordable indoor shoots with creative themes.",
    profilePic: "https://picsum.photos/300/300?random=5",
    portfolio: ["https://picsum.photos/600/400?random=51", "https://picsum.photos/600/400?random=52"],
    reviews: [
      {
        name: "Vikram",
        rating: 3.5,
        comment: "Decent service, could improve on punctuality.",
        date: "2024-09-10"
      }
    ]
  },
  {
    id: 6,
    name: "Creative Lens Studio",
    location: "Chennai",
    price: 11000,
    rating: 4.4,
    styles: ["Outdoor", "Traditional"],
    tags: ["Wedding", "Engagement"],
    bio: "Traditional and contemporary wedding photography specialists.",
    profilePic: "https://picsum.photos/300/300?random=6",
    portfolio: ["https://picsum.photos/600/400?random=61", "https://picsum.photos/600/400?random=62"],
    reviews: [
      {
        name: "Arjun",
        rating: 4,
        comment: "Beautiful traditional shots, very satisfied.",
        date: "2024-08-20"
      }
    ]
  },
  {
    id: 7,
    name: "Portrait Masters",
    location: "Pune",
    price: 9500,
    rating: 4.7,
    styles: ["Studio", "Candid"],
    tags: ["Portrait", "Family"],
    bio: "Expert portrait photographers with 10+ years experience.",
    profilePic: "https://picsum.photos/300/300?random=7",
    portfolio: ["https://picsum.photos/600/400?random=71", "https://picsum.photos/600/400?random=72"],
    reviews: [
      {
        name: "Meera",
        rating: 5,
        comment: "Exceptional quality and professional service.",
        date: "2024-07-15"
      }
    ]
  },
  {
    id: 8,
    name: "Golden Hour Photography",
    location: "Bengaluru",
    price: 13500,
    rating: 4.5,
    styles: ["Outdoor", "Candid"],
    tags: ["Maternity", "Newborn"],
    bio: "Specializing in natural light photography for expecting families.",
    profilePic: "https://picsum.photos/300/300?random=8",
    portfolio: ["https://picsum.photos/600/400?random=81", "https://picsum.photos/600/400?random=82"],
    reviews: [
      {
        name: "Kavya",
        rating: 4.5,
        comment: "Perfect timing and beautiful natural shots.",
        date: "2024-06-10"
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json({ photographers });
}