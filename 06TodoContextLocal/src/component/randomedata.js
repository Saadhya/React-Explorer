//   // memoized the repeated value
//     // const companyDetails = useMemo(() => {
//     //     const userType = localStorage.getItem('userType');
//     //     let companyData;
//     //     if (userType === 'Admin') {
//     //         companyData = localStorage.getItem('selectedCompanyDetails');
//     //     } else if (userType === 'SuperAdmin') {
//     //         companyData = JSON.parse(localStorage.getItem('selectedCompanyDetails'));
//     //     }
//     //     console.log(userType);

//     //     return companyData;
//     // });
//     const companyDetails = useCallback(() => {
//         const userType = localStorage.getItem('userType') ? localStorage.getItem('userType') : '';
//         let companyData;
//         if (userType === 'Admin') {
//             companyData = JSON.parse(localStorage.getItem('selectedCompanyDetails'));
//         } else if (userType === 'SuperAdmin') {
//             companyData = JSON.parse(localStorage.getItem('selectedCompanyDetails'));
//         }
//         console.log(userType);

//         setCompanyCode(companyData.code);
//         setCompanyName(companyData.name);
//         setCompanyDomain(companyData.domain.type);
//         setCompanyId(companyData._id);

//         // return companyData;
//     }, [companyCode]);


// export const getAllCompanys = () => async (dispatch) => {
//     console.log("Companys: getAllCompanys called");

//     const isTokenExpired = isExpired(token);

//     if (!isTokenExpired) {
//       try {
//         const response = await fetch(URL + `/api/getAllCompanies`, {
//           method: "GET",
//           headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
//         }).then((data) => {
//           return data.json();
//         });
//         console.log(response);
//         dispatch({ type: types.GET_ALL_COMPANYS, payload: response });
//         return Promise.resolve(response);
//       } catch (err) {
//         console.log(err);
//         return Promise.reject(err);
//       }
//     } else {
//       return Promise.reject("Token is expired");
//     }
//   };

//   export const getAllActiveCompanys = () => async (dispatch) => {
//     console.log("Companys: getAllActiveCompanys called");

//     const isTokenExpired = isExpired(token);

//     if (!isTokenExpired) {
//       try {
//         const response = await fetch(URL + `/api/getAllActiveCompanys`, {
//           method: "GET",
//           headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch active companies. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Active Companies:", data);

//         dispatch({ type: 'GET_ALL_ACTIVE_COMPANYS', payload: data });

//         return data;
//       } catch (err) {
//         console.error("Error fetching active companies:", err);
//         throw err;
//       }
//     } else {
//       console.error("Token is expired");
//       throw new Error("Token is expired");
//     }
//   };

// export const getAllInactiveCompanys = () => async (dispatch) => {
//   console.log("Companys: getAllInactiveCompanys called");

//   const isTokenExpired = isExpired(token);

//   if (!isTokenExpired) {
//     try {
//       const response = await fetch(URL + `/api/getAllInactiveCompanys`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
//       }).then((data) => {
//         return data.json();
//       });
//       console.log(response);
//       dispatch({ type: types.GET_ALL_INACTIVE_COMPANYS, payload: response });
//       return Promise.resolve(response);
//     } catch (err) {
//       console.log(err);
//       return Promise.reject(err);
//     }
//   } else {
//     return Promise.reject("Token is expired");
//   }
// };

// export const createCompany = (company) => async dispatch => {
//     console.log("Companys: createCompany called");
//     const isTokenExpired = isExpired(token);
//     if (!isTokenExpired) {
//         try {
//             const response = await fetch(URL + `/api/company/create`, {
//                 method: 'POST',
//                 headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + token },
//                 body: JSON.stringify(company)
//             }).then(data => { return data.json() });

//             dispatch({ type: types.CREATE_COMPANY, payload: response });
//             return Promise.resolve(response);
//         } catch (err) {
//             console.log(err);
//             return Promise.reject(err)
//         }
//     } else {
//         return Promise.reject("Token is expired");
//     }
// }

// ...


// what burns is the flame
// what left after the flame is ash
// ash which is converted into the gun powder
// is knows as vishwanath
   // if (response) {
                    //     // console.log('USEEFFECT 2 ' + JSON.stringify(response));
                    //     if (response.userDetails.userRole === 'SUPER_ADMIN') {
                    //         setUserData(response);
                    //         setCompanyData(response.company);
                    //         nav('/console/companys');
                    //     } else {
                    //         setUserData(response);
                    //         setCompanyData(response.company);
                    //         nav('/console/dashboard');
                    //     }
                    //     setTimeout(() => {
                    //         window.location.reload();
                    //     }, 300);
                    // }
                     // const companyName = localStorage.getItem('selectedCompanyName') ? localStorage.getItem('selectedCompanyName') : '';
    // const companyCode = localStorage.getItem('selectedCompanyCode') ? localStorage.getItem('selectedCompanyCode') : '';
    // const companyId = localStorage.getItem('selectedCompanyId') ? localStorage.getItem('selectedCompanyId') : '';
    // const companyDomain = localStorage.getItem('selectedCompanyDomain') ? localStorage.getItem('selectedCompanyDomain') : '';
   