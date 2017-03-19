Layout styles can also be divided into major and minor
styles based on reuse. Major layout styles such as header
and footer are traditionally styled using ID selectors but
take the time to think about the elements that are common
across all components of the page and use class selectors
where appropriate.

Layout declarations

#header, #article, #footer {
    width: 960px;
    margin: auto;
}

#article {
    border: solid #CCC;
    border-width: 1px 0 0;
}
