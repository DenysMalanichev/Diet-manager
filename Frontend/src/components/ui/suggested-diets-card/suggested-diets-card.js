import {Box, Button, Card, Divider, Link} from "@mui/material";
import nameMealMap from "@/components/ui/suggested-diets-card/utils";

export default function SuggestedDietsCard({ mealsInfo } ) {
    const data = mealsInfo;
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            flexWrap: 'wrap', flexDirection: 'column',
            gap: '15px',
            padding: '14px',
            width: 'fit-content',
            boxShadow: '1px 1px 12px gray',
            overflowWrap: 'brea-word',
        }}>
            <h3> YOUR MEALS</h3>

            <Divider sx={{width:'100%'}}></Divider>
            <p>Fat: {data.nutrients.fat}</p>
            <p>Carbohydrates: {data.nutrients.carbohydrates}</p>
            <p>Calories: {data.nutrients.calories}</p>
            <p>Protein: {data.nutrients.protein}</p>
            <Divider sx={{width:'100%'}}></Divider>
            <Box sx={{
                display: 'flex',
                alignItems: 'top', justifyContent: 'left',
                flexWrap: 'wrap', flexDirection: 'row',
                gap: '15px',
                padding: '14px',
                width: 'fit-content',
            }}>

                {data.meals.map((meal, index) => (
                    <Card sx={{
                        gap: '8px',
                        display: 'flex',
                        alignItems: 'left', justifyContent: 'top',
                        flexDirection: 'column',
                        padding: '10px',
                        overflowWrap: 'break-word',
                        width: '200px',
                        boxShadow: '1px 1px 5px gray',
                    }}>
                        <h4> {nameMealMap[index]}</h4>
                        <p>{meal.title}</p>
                        <Divider></Divider>
                        <p>Servings: {meal.servings}</p>
                        <p>Time: {meal.readyInMinutes} minutes</p>
                        <Button></Button>
                        <Link href={meal.sourceUrl} variant="body2">Click the link to view recepie</Link>


                    </Card>
                ))}
            < /Box>
        </Box>
    );
};