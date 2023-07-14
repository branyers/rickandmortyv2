import { useLocations } from "../hooks/useLocations"
export const TestComponent = () => {
    const {locations,data} = useLocations()

    return (
        <>
            {locations && data && console.log(data)}

        </>
    )

}


