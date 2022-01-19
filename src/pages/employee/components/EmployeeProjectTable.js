import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Link } from 'react-router-dom';

export const EmployeeProjectTable = ({data}) => {

    const Header = () => {
        return (
            <TableRow>
                <TableCell>Nazwa projektu</TableCell>
                <TableCell align="right">Klient</TableCell>
                <TableCell align="right">Zespół</TableCell>
                <TableCell align="right">Początek</TableCell>
                <TableCell align="right">Koniec</TableCell>
                <TableCell align="right">Dział</TableCell>
            </TableRow>
        )
    }

    const Row = ({row}) => {
        return (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell >
                        {row.name}
                </TableCell>
                <TableCell align="right">{row.client}</TableCell>
                <TableCell align="right">{row.numberOfEmployees}</TableCell>
                <TableCell align="right">{new Date(row.startDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</TableCell>
                <TableCell align="right">{new Date(row.endDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="center">
                    <Link to={`/project/${row.name}`} style={{textDecoration:"none"}}>
                        <MoreHorizRoundedIcon/>
                    </Link>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper} elevation={10}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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