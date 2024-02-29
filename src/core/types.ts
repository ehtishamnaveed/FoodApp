export type RootStackParamList = {
    SignupScreen: undefined
    Auth: undefined
    LoginScreen: undefined
    ForgotPasswordScreen: undefined
    AddressInfoScreen: undefined
    BottomTab: undefined
    HomeStack: {screen?: string}
}

export type RootBottomParamList = {
    OrdersScreen: undefined
    ProfileScreen: undefined
    ContactScreen: undefined
    HomeScreen: undefined
    CartScreen: undefined
}

export interface FormErrors {
    radio?: string
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    currentPassword?: string
    phoneNumber?: string
    postalCode?: string
    sector?: string
    streetNo?: string
    houseNo?: string
}

export interface FirebaseAuthError extends Error {
    code: string
    message: string
}