let people = [
    {id: 0,
     name: 'stefano',
     age: 24,
     favSport: 'soccer'
    },
    {id: 1,
     name: 'mason',
     age: 49,
     favSport: 'soccer'
    },
    {id: 2,
     name: 'Tommy',
     age: 24,
     favSport: 'basketball'
    },
    {id: 4,
     name: 'nikki',
     age: 24,
     favSport: 'basketball'
    },
    {id: 5,
     name: 'andy',
     age: 33,
     favSport: 'badminton'
    },
    {id: 6,
     name: 'april',
     age: 21,
     favSport: 'badminton'
    },
    {id: 7,
     name: 'anne',
     age: 22,
     favSport: 'badminton'
    }
]



module.exports = {
    //Get
    getAllUsers: (req, res) => {
        res.status(200).send(people)
    },
    //Create
    postUser: (req, res) => {
        people.push(req.body)
        res.status(200).send(people)
    },
    //filter by favSport
    getSpecificUser: (req,res) => {
        let newArr = people.filter( e => e.favSport == req.query.favSport)
        res.status(200).send(newArr)
    },
    //pull up specific user by id param
    queryUser: (req, res) => {
        var user = people.filter( e => e.id == req.params.id)
        res.status(200).send(user)
    },
    //update user by 
    updateUser: (req,res) => {
        people.map( e => {
            if(e.id == req.params.id) {
                e.name = req.body.name;
                e.age = req.body.age;
                e.favSport = req.body.favSport;
            }
        })
        res.status(200).send(people)
    }
}