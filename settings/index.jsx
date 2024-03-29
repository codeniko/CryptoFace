function mySettings(props) {
    return (
        <Page>
            <Section
                title="Show Refresh Button or Fear And Greed Indices"
                description="This swaps between showing the new Fear and Greed Indices feature, and the refresh button.">

                <Toggle
                    settingsKey="setting-show-refresh"
                    label="Show Refresh Button"
                />
            </Section>
            <Section
                title="Crypto/Stock watchface settings"
                description="These are the tickers to retrieve and show on your watchface. Crypto usually requires a suffix such as '-USD'. Note: Changes may take up to 5 minutes to take effect.">

                <TextInput
                    settingsKey="setting-ticker1"
                    label="Ticker #1"
                    placeholder="BTC-USD"/>
                <TextInput
                    settingsKey="setting-ticker2"
                    label="Ticker #2"
                    placeholder="ETH-USD"/>
                <TextInput
                    settingsKey="setting-ticker3"
                    label="Ticker #3"
                    placeholder="AVAX-USD"/>
                <TextInput
                    settingsKey="setting-ticker4"
                    label="Ticker #4"
                    placeholder="NFLX"/>
                <TextInput
                    settingsKey="setting-ticker5"
                    label="Ticker #5"
                    placeholder="DIA"/>
                <TextInput
                    settingsKey="setting-ticker6"
                    label="Ticker #6"
                    placeholder="VOO"/>
            </Section>
        </Page>
    )
}

registerSettingsPage(mySettings)
