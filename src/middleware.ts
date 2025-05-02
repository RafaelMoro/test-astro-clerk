// import { defineMiddleware } from "astro:middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

// Custom middleware
// export const onRequest = defineMiddleware((context, next) => {
//     const lang = context.request.headers.get("Accept-language")
//     const [langCode] = lang?.split(',') || []
//     console.log({ langCode })

//     if (langCode === 'en-US') {
//         context.locals.title = 'English App'
//         // return context.redirect('/en-US/')
//     } else {
//         context.locals.title = 'Otra app de Retos'
//     }
//     return next();
// })

const isProtectedRoute = createRouteMatcher([
    '/retos(.*)'
])
export const onRequest = clerkMiddleware((auth, context) => {
    const { userId, redirectToSignIn } = auth();

    if (isProtectedRoute(context.request) && !userId) {
        return redirectToSignIn()
    }
});