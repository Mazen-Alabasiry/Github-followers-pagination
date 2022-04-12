import { useState, useEffect } from 'react'
const url = process.env.REACT_APP_END_POINT

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPageData, setCurrentPageData] = useState([])
  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  ////
  const NumberOfUsersInPage = 12;
  const NumberOfUsers = data.length;
  const NumbersOfPages = Math.ceil(NumberOfUsers / NumberOfUsersInPage);
  ////
  const getUsers = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json();
      if (response.status === 404) {
        setLoading(true)
      } else {
        setData(data)
        let CurrentPageUsers = []
        for (let index = 0; index < NumberOfUsersInPage; index++) {
          CurrentPageUsers.push(data[index])

        }
        setCurrentPageData(CurrentPageUsers)
        setLoading(false)
      }

    } catch (error) {
      setLoading(true)
      console.log(error.message)
    }
  }
  ///
  const displayCurrentPage = (number) => {
    setLoading(true);
    try {
      let CurrentPageUsers = [];
      let lastUser = number * NumberOfUsersInPage;
      let firstUser = lastUser - NumberOfUsersInPage;

      for (let index = firstUser; index < lastUser; index++) {
        CurrentPageUsers.push(data[index])
      }
      setCurrentPageIndex(number)
      setCurrentPageData(CurrentPageUsers);
      setLoading(false);
    } catch (error) {
      console.log(error.message)
      setLoading(true);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  return { loading, data, currentPageData, displayCurrentPage, NumbersOfPages, currentPageIndex }
}
