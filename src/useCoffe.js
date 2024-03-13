import { useEffect, useState } from "react";

export function useCoffee() {
    const [coffee, setCoffee] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => setCoffee(data))
            .catch(error => console.error(error));
    }, [])

    return { coffee }
}
