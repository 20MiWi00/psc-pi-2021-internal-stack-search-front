import { Rating, Typography } from "@mui/material"
import { amber } from "@mui/material/colors"

export const RatingInfo = ({data}) => {
    return (
        <div style={{marginLeft:"auto", display:"flex", flexDirection:"column", alignSelf:"center", alignItems:"flex-end" }}>
            {data.map(x => {
                return (
                    <div style={{display:"flex"}}>
                        <div >
                            <Typography variant="subtitle1" sx={{textTransform:"uppercase"}} >{x.language}</Typography>
                        </div>
                        <div style={{paddingLeft:10}}>
                            <Rating readOnly  value={x.score} max={5}  sx={{
                                "& .MuiRating-iconFilled":{
                                    color:amber[700]
                                }
                            }}/>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}