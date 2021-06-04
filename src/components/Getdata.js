import React, { useState, useEffect } from 'react'
import { Pagination, Icon, Form, Button } from 'semantic-ui-react'
import './Getdata.css'

function Getdata() {
    const [perPage, setPerPage] = useState('15');
    const [repoData, setRepoData] = useState([]);
    const [filter, setFilter] = useState('');
    const [query, setQuery] = useState('');
    const [currPage, setCurrPage] = useState('1');
    const [totPage, setTotPage] = useState('');


    const FetchRepo = () => {
        // console.log(query);
        // console.log(filter, perPage);
        console.log(currPage);
        fetch(`https://api.github.com/search/repositories?q=${query}&page=${currPage}&per_page=${perPage}&sort=${filter}`)
        .then(res => res.json())
        .then(async (data) => {
            await setRepoData(data.items);
            const totalItems = data.total_count;
            const totalPages = Math.ceil(totalItems/perPage);
            setTotPage(totalPages);
            // console.log(data);
            // console.log(repoData);
        });
    }

    const Paginated = (Event) => {
        setCurrPage(Event.target.getAttribute('value'));
        console.log(currPage);
        FetchRepo();
        
    }

    // const GetLanguages = (uri) => {
    //     fetch(uri)
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         const lang = [];
    //         Object.keys(data).forEach(d => {
    //             lang.push(d);
    //         });
    //         console.log(lang);
    //         return lang;
    //     })
    // }
    useEffect(() => {
        // FetchRepo();
    }, []);

    return (
        <div>
            <div className="container">
                <p className="h4 text-center">Search the repository</p>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="search">
                            <Form>
                                <Form.Group>
                                    <Form.Input placeholder="Search the repository" onChange={Event=>setQuery(Event.target.value)} name='name' />
                                    <Form.Button content='Search' onClick={FetchRepo} secondary />
                                </Form.Group>
                            </Form>
                            {/* <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <center><Input placeholder='Search...' /></center>
                                    </div>
                                    <div className="col-md-10 pt-1">
                                        <center><Button content='Submit' secondary /></center>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div className="container">
                            <p className="h4 text-center">Filter Options</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <center>Sort by (Default: Best Match): <br/>
                                    {/* <Dropdown clearable onChange={Event=>setFilter(Event.target.value)} options={options} selection /> */}

                                        <select class="form-select mt-3" aria-label="Default select example" value={filter} onChange={Event=>setFilter(Event.target.value)} style={{width: '15rem'}}>
                                            <option selected value='1'>Best Match</option>
                                            <option value="stars">Top starred</option>
                                            <option value="forks">Top Forked</option>
                                        </select>
                                    </center>
                                </div>
                                <div className="col-md-6 text-center">
                                    Results per page (Default: 15 & Max: 100): <br/>
                                    {/* <Dropdown placeholder='Compact' compact onChange={Event=>setPerPage(Event.target.value)} selection options={getOptions(15, '')} /> */}
                                        
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-3">
                                                <div className="input-group pt-3">
                                                    <input type="number" className="form-control" placeholder="Default 15" value={perPage} onChange={Event=>setPerPage(Event.target.value)} maxLength='30' style={{maxWidth: '15rem'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-5">
                        <p className="h4 text-center">Repository search result made for <b>{query}</b></p>
                        { Object.keys(repoData).length === 0 ? <h4 className="text-center" style={{color: 'red'}}>Enter query</h4>: 
                        <div className="container">
                            <div className="row justify-content-left">
                                {repoData.map(item => (
                                <div className="col-md-4 pt-5" style={{textAlign: 'left'}} key={item.id}>
                                    <center>
                                        <div className="card text-white bg-dark mb-3 text-left" style={{maxWidth: '25rem', border: 'none'}}>
                                            <img src={item.owner.avatar_url} className="card-img-top" alt="..." />
                                            <div className="card-header text-left"><h3 className="text-left h3" style={{color: '#2185D0'}}><a href={item.html_url}>{item.owner.login}/<b>{item.name}</b></a></h3> <div className="text-left">The owner is an <b>{item.owner.type}</b></div></div>
                                            <div className="card-body">
                                                <div className="text-left"><b>Repository Description:</b></div>
                                                <div className="text-left">{item.description}</div>
                                                <hr />
                                                { item.license ? <div className="py-2"><Icon name='drivers license' /> {item.license.name} - License</div> : '' }
                                                <div className="py-2"><Icon name='fork' /> {item.forks} - Forks</div>
                                                <div className="py-2"><Icon name='star' /> {item.stargazers_count} - Stars</div>
                                                <div className="py-2"><Icon name='code' /> {item.language} - Primary Language</div>
                                                <div className="py-2"><Icon name='eye' /> {item.watchers} - Watchers</div>
                                                <div className="py-2"><Icon name='bell' /> {item.open_issues} - Open Issues</div>
                                                <hr />
                                                {/* <div className="text-left">
                                                    <b>Languages used: {item.languages_url}</b>
                                                    {GetLanguages(item.languages_url)}
                                                </div> */}
                                                <br/><br/>
                                                <Button content='Open Code' onClick={() => window.location.href = item.html_url} icon='code branch' primary/>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                ))}

                                <div className="col-md-12 pt-5">
                                    <center>
                                        <Pagination 
                                            defaultActivePage={currPage} 
                                            totalPages={totPage} 
                                            
                                            onPageChange={(Event)=> Paginated(Event)}
                                            style={{maxWidth: '60vw'}}
                                        />
                                    </center>
                                </div>
                            </div>
                        </div>
                        }
                        {/* {repoData.map(item => (
                        <div className="card">
                            <Card key={item.id}>
                                
                                <Card.Content>
                                    <Card.Header>{item.full_name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='fork' />
                                        22 Friends
                                    </a>
                                </Card.Content>
                            </Card>
                        </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getdata


