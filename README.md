#Git Hub Issues

## How to start

Implment UI

    - Pagination
    - Search form
    - Alert Message
    - List of Issues

        -Issue

    - Modal
    - Loading Spinner

        Working on features
            [ ] There are no plan to remove class components from React, but the official website recommend trying Hooks in new code. So from now on, you should only use function components with Hooks.
        [ ] The user can enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format owner/repo-name, e.g. facebook/react.
        [ ] If the repository does not exist, the user should see a proper error message.
        [ ] The user should be able to see the following information for each issue:
        Issue Title with Number of the issue
        Owner of the Issue
        Owner Avatar
        How long ago the issue was updated in a human-friendly format (e.g. 2 days ago) (Hint: react-moment)
        Body of the Issue
        Labels of the issue
        [ ] The user should be able to see multiple pages of results, by clicking a pagination control.
        [ ] The user can see more details (including 5 comments of the issue) in a modal that's opened by clicking on the title of the issue.
        [ ] The user should be able to see the body of the issue rendered in markdown. (Hint: react-markdown)
        [ ] Fetching is an asynchronous operation, so you should display a loading spinner whenever the app loads data, and hide it once the corresponding API call has been completed.
        [ ] Input Fuzzy Matching: the user should be able to type in either https://github.com/facebook/react or facebook/react, BOTH should work.
        [ ] In the Issue Detail Modal, let implement an infinite pagination with a "Show More" button: Fetch 5 more comments whenever user clicks on the button. The button is disabled or hidden when all the comments have been loaded.
