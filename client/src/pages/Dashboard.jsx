import Allpost from '@/components/custom/Allpost';
import Createpost from '@/components/custom/Createpost';
import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
            const tab = useSelector((state) => state.nav.tab);
     
            const renderComponent = () => {
                        switch (tab) {

                                    case "create-post":
                                                return <Createpost />
                                    case "all-post":
                                                return <Allpost />
                                    default:
                                                return <Createpost />
                        }
            }
            return (
                        <div>
                                    {
                                                renderComponent()
                                    }
                        </div>
            )
}

export default Dashboard