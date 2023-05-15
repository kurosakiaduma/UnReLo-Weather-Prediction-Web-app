import { useState } from "react";
import Linechart from "../components/Linechart";
import { Card, Grid, Tab, TabList, Text, Title } from "@tremor/react";

export default function weatherdataGrid() {
    const [selectedView, setSelectedView] = useState("1"); 
    return (
        <main className="bg-slate-50 p-6 sm:p-10">
            <Title>Weather Data </Title>
            <Text>This is the weather data of the specific sensor's location</Text>

            <TabList
             defaultValue="1"
             onValueChange={(value) => setSelectedView(value)}
             className="mt-6"
            >
                <Tab value="1" text="Overview"></Tab>
                <Tab value="2" text="Detail"></Tab>
            </TabList>

            {selectedView === "1" ? (
                <>
                <Grid numColsLg={3} className="mt-6 gap-6">
                    <Card>
                        {/* Placeholder to set height */}
                        <div className="h-28"/>
                    </Card>
                    <Card>
                        {/* Placeholder to set height*/}
                        <div className="h-28"/>
                    </Card>
                    <Card> 
                        {/* Placeholder to set height */}
                        <div className="h-28"/>
                    </Card>
                </Grid>

                <div className="mt-6">
                    <Card>
                        <div className="h-80" />
                    </Card>
                </div>
                </>
            ) : (
                <Card className="mt-6">
                    <div className="h-96">
                        <Linechart />
                    </div>

                </Card>
            )}
        </main>
    );
};