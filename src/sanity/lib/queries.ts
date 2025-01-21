import { groq } from "next-sanity";



export const PopularCar = groq `*[_type == "car"][0..3]`;
export const RecommandCar = groq `*[_type == "car"][4..16]`


