import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        // locale is in ctx.locale

        return { ...initialProps, locale: ctx?.locale || 'es' }
    }
   
    render = () => (
        <Html dir={this.props.locale === 'ar' ? 'rtl': 'ltr'} lang={this.props.locale}>
            <Head />
            <body dir="rtl">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument