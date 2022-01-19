import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { Link } from 'react-router-dom'


export const ProjectEmployeesTable = ({data}) => {

    const Header = () => {
        return (
            <TableRow>
                <TableCell align="center">Imię</TableCell>
                <TableCell align="center">Nazwisko</TableCell>
                <TableCell align="center">Stanowisko</TableCell>
            </TableRow>
        )
    }

    const Row = ({row}) => {
        return (
            <TableRow align="center"
                key={row.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center">
                        {row.firstName}
                </TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">
                    <Link to={`/employee/${row.id}`} style={{textDecoration:"none"}}>
                        <MoreHorizRoundedIcon/>
                    </Link>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper} elevation={10}>
            <Table sx={{ minWidth: 400, minHeight:450 }} aria-label="simple table">
            <TableHead>
                <Header/>
            </TableHead>
            <TableBody>
                {data.map((row) => 
                    <Row row={row}/>
                )}
            </TableBody>
            </Table>
        </TableContainer>
    )

}