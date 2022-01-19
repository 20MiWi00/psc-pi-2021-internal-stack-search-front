import { Avatar, Typography } from "@mui/material"

export const ProfileInfo = ({data:{image, firstName, lastName, position}}) => {
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <Avatar src={image} sx={{ width: 72, height: 72 }}  />
            <div style={{paddingLeft:10}}>
                <Typography variant="h5">
                    {firstName} {lastName}
                </Typography>
                <Typography variant="subtitle2">
                    {position}
                </Typography>
            </div>
        </div>
    )
}