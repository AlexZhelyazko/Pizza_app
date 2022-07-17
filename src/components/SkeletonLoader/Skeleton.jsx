import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466.8}
    viewBox="0 0 280 466.8"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="314" rx="0" ry="0" width="208" height="59" /> 
    <rect x="150" y="393" rx="0" ry="0" width="76" height="41" /> 
    <rect x="20" y="394" rx="0" ry="0" width="115" height="40" /> 
    <circle cx="131" cy="132" r="110" /> 
    <rect x="20" y="258" rx="0" ry="0" width="214" height="40" />
  </ContentLoader>
)