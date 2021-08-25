import React, {useEffect, useState} from 'react';
import './App.css';
import { Map } from "./components/Map/Map";
import { Users } from "./components/Users/Users";
import axios from "axios";

export function App() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [peoplePerPage] = useState(15);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            return await axios.get('https://213.184.245.66:5010/api/get_all_people', {
                auth: {
                    username: 'fetest',
                    password: 'root123456'
                }
            });

        }
        fetchPosts().then(r => {
            setPeople(r.data.data.people);
            setLoading(false);
        })

    }, []);

    // Get current people
    const indexOfLastHuman = currentPage * peoplePerPage;
    const indexOfFirstHuman = indexOfLastHuman - peoplePerPage;
    const currentPeople = people.slice(indexOfFirstHuman, indexOfLastHuman)

    //ReactPaginate
    const totalPeople = people.length;
    const totalPages = Math.ceil(totalPeople / peoplePerPage)
    const changePage = ({selected}) => {
        setCurrentPage(selected + 1);
    }

    return (
        <div>
            <h1 className="title">My test Complitech</h1>
            <div className="wrapper">
                <Users people={currentPeople}
                       loading={loading}
                       totalPages={totalPages}
                       changePage={changePage}/>
                <Map/>
            </div>
        </div>
    );
}
