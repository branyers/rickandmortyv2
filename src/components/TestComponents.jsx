const TestComponents = ({data}) => {

    return (

        <>
        {data && data.map(({name})=>{
            return <h1>{name}</h1>
        })} 
        </>

       
    )
}

export default TestComponents;