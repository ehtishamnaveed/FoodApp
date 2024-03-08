import { Text, View, StyleSheet, FlatList, ScrollView, Image, TextInput, ListRenderItem } from "react-native"
import { useEffect } from "react"
import { horizontalScale, moderateScale, verticalScale } from "../utils/responsive"
import { Colors } from "../theme/color"
import SearchComponent from "../components/SearchComponent"
import FoodCard from "../components/FoodCard"
import Fonts from "../theme/typographic"
import { IProduce } from "../core/types"

const HomeScreen = () => {
    useEffect(() => {
        console.log("Inside Home Screen")
    }, [])
    const foodData: IProduce[] = [
        { id: '1', name: 'Apple', price: '$1.99', marketPrice: '$2.49', subText: 'Fresh and juicy', category: 'Fruit', weight: '0.5kg', image: require('../assets/apples.jpg') },
        { id: '2', name: 'Banana', price: '$0.99', marketPrice: '$1.29', subText: 'Rich in potassium', category: 'Fruit', weight: '0.3kg', image: require('../assets/apples.jpg') },
        { id: '3', name: 'Carrot', price: '$0.79', marketPrice: '$0.99', subText: 'High in Vitamin A', category: 'Vegetable', weight: '0.2kg', image: require('../assets/apples.jpg') },
        { id: '4', name: 'Orange', price: '$1.49', marketPrice: '$1.99', subText: 'Source of Vitamin C', category: 'Fruit', weight: '0.4kg', image: require('../assets/apples.jpg') },
        { id: '5', name: 'Broccoli', price: '$1.29', marketPrice: '$1.79', subText: 'Nutrient-rich', category: 'Vegetable', weight: '0.3kg', image: require('../assets/apples.jpg') },
        // Add more food items as needed
    ];

    // Function to render individual food item
    const renderItem: ListRenderItem<IProduce> = ({ item }) => (
        <FoodCard item={item} />
    );

    // Function to render category
    const renderCategory = (category: string) => (
        <View style={styles.categoryContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, }}>
                <Text style={styles.categoryName}>{category}</Text>
                {/* <Text style={styles.seeAllStyle}>See All</Text> */}
            </View>
            <FlatList
                horizontal
                data={foodData.filter(food => food.category === category)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
    return (
        <ScrollView style={styles.mainContainer}>
            <SearchComponent />
            {renderCategory('Fruit')}
            {renderCategory('Vegetable')}
            {renderCategory('Fruit')}
            {renderCategory('Vegetable')}
            {renderCategory('Fruit')}
            {renderCategory('Vegetable')}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // justifyContent: 'center',
        paddingVertical: verticalScale(50),
        backgroundColor: 'white',
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryName: {
        fontSize: moderateScale(18),
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: Fonts.Family.Bold
    },
    seeAllStyle: {
        fontSize: moderateScale(14),
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: Fonts.Family.Bold,
        alignSelf: 'flex-end',
        color: Colors.lightGrey
    }
});

export default HomeScreen