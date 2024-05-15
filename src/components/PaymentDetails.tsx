import React from "react";
import { Text, StyleSheet, View } from "react-native"
import Fonts from "../theme/typographic"
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Colors } from "../theme/color";
import { horizontalScale, moderateScale, verticalScale } from "../utils/responsive";

const PaymentDetails = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flexDirection}>
                <Text style={styles.textStyle}>{'Produce Total'}</Text>
                <Text style={styles.textStyle}>${'100'}</Text>
            </View>
            <View style={styles.flexDirection}>
                <Text style={styles.textStyle}>{'Delivery Fee'}</Text>
                <Text style={styles.textStyle}>${'6.99'}</Text>
            </View>
            <View style={styles.flexDirection}>
                <Text style={styles.textStyle}>{'Total Amount'}</Text>
                <Text style={styles.textStyle}>${'106.99'}</Text>
            </View>
            <View style={styles.deliveryDetailsContainer}>
                <View style={styles.flex}>
                    <View>
                        <Icon name="credit-card" size={30} color={'black'} style={styles.iconStyle} />
                    </View>
                    <View>
                        <Text style={[styles.textStyle, styles.margin]}>{'Billing Saturday'}</Text>
                        <Text style={[styles.lightTextStyle, styles.margin]}>{'At cut-off 11:59 pm'}</Text>
                    </View>
                </View>
                <View style={styles.flex}>
                    <View>
                        <Icon name="truck" size={30} color={'black'} style={styles.iconStyle} />
                    </View>
                    <View>
                        <Text style={[styles.textStyle, styles.margin]}>{'Delivery Tuesday'}</Text>
                        <Text style={[styles.lightTextStyle, styles.margin]}>{'Before 6:30 pm'}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
        // backgroundColor:'red'
    },
    textStyle: {
        fontFamily: Fonts.Family.SemiBold,
        fontSize: moderateScale(18)
    },
    deliveryDetailsContainer: {
        marginTop: verticalScale(30)
    },
    lightTextStyle: {
        fontFamily: Fonts.Family.MediumItalic,
        color: Colors.slateGrey,
        fontSize: moderateScale(14)
    },
    flex: {
        flexDirection: 'row',
        // justifyContent:'space-evenly',
        marginTop: verticalScale(30)
    },
    iconStyle: {
        marginTop: verticalScale(5)
    },
    margin: {
        marginHorizontal: horizontalScale(20)
    }
})
export default PaymentDetails