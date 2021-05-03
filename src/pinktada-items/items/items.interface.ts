

declare module Pinktada {

    export interface Id {
        $oid: string;
    }

    export interface Caption {
        __typename: string;
        kickerBadge?: any;
        messages: string[];
    }

    export interface ContextualPicture {
        __typename: string;
        caption: Caption;
        id: string;
        picture: string;
    }

    export interface FormattedBadge {
        __typename: string;
        backgroundColor: string;
        borderColor: string;
        text: string;
        textColor: string;
    }

    export interface HomeDetail {
        __typename: string;
        title: string;
    }

    export interface KickerContent {
        __typename: string;
        kickerBadge?: any;
        messages: string[];
        textColor?: any;
    }

    export interface Overview {
        __typename: string;
        title: string;
    }

    export interface User {
        __typename: string;
        createdAt?: any;
        firstName: string;
        hasProfilePic: boolean;
        id: string;
        isSuperhost: boolean;
        pictureUrl: string;
        smartName: string;
        thumbnailUrl: string;
    }

    export interface WideKickerContent {
        __typename: string;
        kickerBadge?: any;
        messages: string[];
        textColor: string;
    }

    export interface Listing {
        __typename: string;
        amenityIds: number[];
        avgRating: number;
        badges: string[];
        bathroomLabel: string;
        bathrooms: number;
        bedLabel: string;
        bedroomLabel: string;
        bedrooms: number;
        beds: number;
        cancellationPolicyTitle?: any;
        city: string;
        contextualPictures: ContextualPicture[];
        detailedRating?: any;
        formattedBadges: FormattedBadge[];
        guestLabel: string;
        homeDetails: HomeDetail[];
        hostLanguages: string[];
        hostThumbnailUrl: string;
        hostThumbnailUrlSmall: string;
        hotelRoomCountLabel?: any;
        hotelRoomTypeCountLabel?: any;
        id: string;
        isBusinessTravelReady: boolean;
        isFullyRefundable?: any;
        isHostHighlyRated?: any;
        isNewListing: boolean;
        isRebookable?: any;
        isSuperhost: boolean;
        kickerContent: KickerContent;
        lat: number;
        lng: number;
        localizedCity: string;
        localizedNeighborhood?: any;
        locationContext?: any;
        mainSectionMessage?: any;
        mainSectionMessages: any[];
        overview: Overview[];
        name: string;
        neighborhood?: any;
        neighborhoodOverview?: any;
        pdpDisplayExtensions: any[];
        pdpType: string;
        pdpUrlType: string;
        personCapacity: number;
        picture?: any;
        pictureCount: number;
        pictureUrl: string;
        pictureUrls: any[];
        previewAmenities: string;
        previewAmenityNames: any[];
        previewEncodedPng?: any;
        previewTagNames?: any;
        previewTags: any[];
        propertyType?: any;
        propertyTypeId: string;
        publicAddress: string;
        reviews: any[];
        reviewsCount: number;
        roomAndPropertyType: string;
        roomType: string;
        roomTypeCategory: string;
        scrimColor?: any;
        searchPoiContext?: any;
        seoNeighborhoodOverview?: any;
        seoReviews: any[];
        seoSpace?: any;
        seoSummary?: any;
        showPhotoSwipeIndicator: boolean;
        showStructuredName: boolean;
        space?: any;
        spaceType: string;
        starRating: number;
        starRatingColor: string;
        summary?: any;
        tags?: any;
        tierId: number;
        user: User;
        wideKickerContent: WideKickerContent;
    }

    export interface Rate {
        __typename: string;
        amount: number;
        amountFormatted: string;
        currency: string;
        isMicrosAccuracy: boolean;
    }

    export interface RateWithServiceFee {
        __typename: string;
        amount: number;
        amountFormatted: string;
        currency: string;
        isMicrosAccuracy: boolean;
    }

    export interface PrimaryLine {
        __typename: string;
        accessibilityLabel: string;
        price: string;
        qualifier: string;
    }

    export interface StructuredStayDisplayPrice {
        __typename: string;
        primaryLine: PrimaryLine;
        secondaryLine?: any;
        explanationData?: any;
    }

    export interface PricingQuote {
        __typename: string;
        applicableDiscounts?: any;
        barDisplayPriceWithoutDiscount?: any;
        canInstantBook: boolean;
        displayRateDisplayStrategy?: any;
        monthlyPriceFactor: number;
        price?: any;
        priceDropDisclaimer?: any;
        priceString: string;
        rate: Rate;
        rateType: string;
        rateWithoutDiscount?: any;
        rateWithServiceFee: RateWithServiceFee;
        secondaryPriceString?: any;
        shouldShowFromLabel: boolean;
        totalPriceDisclaimer?: any;
        totalPriceWithoutDiscount?: any;
        weeklyPriceFactor: number;
        structuredStayDisplayPrice: StructuredStayDisplayPrice;
    }

    export interface Verified {
        __typename: string;
        badgeSecondaryText: string;
        badgeText: string;
        enabled: boolean;
        kickerBadgeType: string;
    }

    export interface Location {
        type: "Point";
        lat: number;
        lon: number;
    }

    export interface RootObject {
        _id: Id;
        __typename: string;
        listing: Listing;
        listingParamOverrides?: any;
        luxuryInfo?: any;
        pricingQuote: PricingQuote;
        verified: Verified;
        verifiedCard: boolean;
        location: Location;
    }

}

