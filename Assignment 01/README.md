# Board Games (Chess) as Family Connection - Assignment 01

## Satsuki Liu - DGT HUM 110 @ UCLA, Spring '23

### Project Description
Though still preliminary, my hope for this UX project is to design a user experience targeting multiple generations of family members (ranging from children to grandparents), such that they will be able to experience "family connection" via means of spending quality time with each other. For my purposes, I will be attempting to present an intuitive and engaging UX for board games, specifically centered around chess as a medium for the aforementioned "family connection." There exist good applications for this purpose already, though in my research, some of them have feature bloat and rely upon systems that a grandparent might not find immediately intuitive. Thus, I have chosen two competitor apps for mobile chess to examine using Nielson's ten heuristics.

### Nielsen's Heuristics
Using the [NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/) page as reference, the following table explains the ten heuristics created by Jakob Nielsen.

| #     | Name  | Description   |
| ---   | ---   | ---           |
| 1 | Visibility of system status | UI/UX should visibly display **what** is happening in a system in a quick and reasonable manner. |
| 2 | Match between system and the real world | UI/UX should match user's expectations of the **real-world**, speaking in plain terms rather than technical jargon, both textually and visually. |
| 3 | User control and freedom | UI/UX should empower users to amend mistakes and terminate processes in an easily identifiable manner (**undo** and **redo**). |
| 4 | Consistency and standards | UI/UX should conform to **existing industry standards** such that pre-existing common consumer language can be leveraged. |
| 5 | Error prevention | UI/UX should **preclude errors** where possible, being designed in a manner with preventation of such. |
| 6 | Recognition rather than recall | UI/UX should be **intuitive** through prompting, not being reliant on needing to remember the milieu of the application. |
| 7 | Flexibility and efficiency of use | UI/UX should have **redundancy** for its functions, such that different classes of users can use the application in varying levels of efficacy. |
| 8 | Aesthetic and minimalist design | UI's visuals should be focused on the **essentials** of the design rather than the frills. Function should be prioritized over form. |
| 9 | Help users recognize, diagnose, and recover from errors | UI/UX should provide an **easy diagnosis and solution** for errors as they occur, allowing users to fix any problems that arise. |
| 10 | Help and documentation | UI/UX should provide **help to the user** if they are lost. The documentation should be quickly accessible, easy to navigate, and concrete in its directions. |

# App 1: [Chess (AI Factory)](https://play.google.com/store/apps/details?id=uk.co.aifactory.chessfree)
## Summary
[Chess](https://play.google.com/store/apps/details?id=uk.co.aifactory.chessfree) is a lightweight application designed for the express purpose of being a means of playing chess, either with two players on the same device or on two devices through the Internet. There is not much more to say in terms of describing its function, though my findings were that its UI was often unintuitive and its integration with Google Play Games was grating.

## Heuristic Evaluation
| Heuristic     | Summary  | Suggestions   | Severity |
| ---   | ---   | ---   | --- |
| Visibility of system status | When handling integration with Google Play accounts, it's not immediately apparent *which* account a user might be signed into, especially on the landing page and the main menu. In fact, the only screens on which a user can check which account is connected is on the Multiplayer tab. If a user has multiple Google accounts, or if multiple users share the same device, this oversight can be confusing and frustrating to deal with. | Rather than displaying the fact that a user is simply "signed in" on the landing page, connecting to Google's avatar API to display which account is currently connected to the application would be helpful. Furthermore, adding a widget for displaying the current Google account on the main menu would allow for a more sensible, easily-checkable way to monitor the system status. | 2 |
| Match between system and the real world | The icons used to configure CPU assistance during matches are very confusing to someone who isn't familiar with chess terminology and pre-established notions of the game, such as forks, pins, and skewers. The setting to display **"Pieces in Danger"** is represented by a pawn with the circular knob replaced with a red cartoon frown, **"Unsafe Moves"** is represented with a pawn next to an arrow superimposed with a frown, and **"Enhanced Unsafe Moves"** is represented by a network of four pawns, dashed arrows, and the same frown from before. This is not at all understandable to a layperson. | Though the application already has pop-ups for when the user first touches these icons that explain the features in greater detail, this only happens for the first selection and does not appear again. A simple way to fix this is to either get rid of the visual icons entirely and replace them with the text of their actual functions, or perhaps to allow users to check their names by tapping and holding the buttons and having the names hover above in a modal upon doing such. | 3 |
| User control and freedom | UI/UX should empower users to amend mistakes and terminate processes in an easily identifiable manner (**undo** and **redo**). |
| Consistency and standards | UI/UX should conform to **existing industry standards** such that pre-existing common consumer language can be leveraged. |
| Error prevention | UI/UX should **preclude errors** where possible, being designed in a manner with preventation of such. |
| Recognition rather than recall | UI/UX should be **intuitive** through prompting, not being reliant on needing to remember the milieu of the application. |
| Flexibility and efficiency of use | UI/UX should have **redundancy** for its functions, such that different classes of users can use the application in varying levels of efficacy. |
| Aesthetic and minimalist design | UI's visuals should be focused on the **essentials** of the design rather than the frills. Function should be prioritized over form. |
| Help users recognize, diagnose, and recover from errors | UI/UX should provide an **easy diagnosis and solution** for errors as they occur, allowing users to fix any problems that arise. |
| Help and documentation | UI/UX should provide **help to the user** if they are lost. The documentation should be quickly accessible, easy to navigate, and concrete in its directions. |

## Conclusion