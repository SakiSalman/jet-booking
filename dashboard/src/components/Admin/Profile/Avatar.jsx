
const Avatar = ({clist, alt, style, src}) => {
  return (
    <>
    
{
  
  src && <img style={style} className={clist?clist : `avatar-img rounded-circle`} src={src} alt={alt?alt:`image`} />
}
{
  
  !src && <img style={style} className={clist?clist : `avatar-img rounded-circle`} src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} alt={alt?alt:`image`} />
}
    
    
    </>
  )
}

export default Avatar