import express from 'express';
// import { getEmployees, hireEmployee, getMaxNo, fireEmployee, updateEmployee } from '../services/employee-services.js';
const api_router = express.Router();
import { getPopularCategories } from '../services/category-services.js';
import { getChildrenMenus, getParentMenus } from '../services/menu-services.js';


// emp_router.put("/employee", async (request, response) => {
//     const body = request.body;
//     console.log(body);
//     const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//     console.log(result);
//     response.status(200).send({ result })
// })

// emp_router.delete("/employee", async (request, response) => {
//     const body = request.body;
//     console.log(body);

//     const result = await fireEmployee(body.empNo);
//     response.status(200).send({ result });
// })

// emp_router.post('/employee', async (request, response) => {

//     const { birthDate, firstName, lastName, gender, hireDate } = request.body;
//     const { max } = await getMaxNo();
//     console.log(max);

//     const result = await hireEmployee(
//         max + 1,
//         birthDate,
//         firstName,
//         lastName,
//         gender,
//         hireDate
//     );

//     console.log(result);


//     response.status(200).send({})
// })

api_router.get('/popular', async (request, response) => {
    const result = await getPopularCategories()
    console.log(result);

    response.status(200).send(result)

});

api_router.get('/menus', async (request, response) => {
    const parentMenus = await getParentMenus();

    await Promise.all(
        parentMenus.map(async (parent) => {
            const children = await getChildrenMenus(parent.id)
            parent.children = children;
            return parent;
        })
    )
    response.status(200).send(parentMenus)
})

export default api_router;