"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const accountRoutes_1 = __importDefault(require("./routes/accountRoutes"));
const candidateRoutes_1 = __importDefault(require("./routes/candidateRoutes"));
const questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/accounts', accountRoutes_1.default);
app.use('/api/candidates', candidateRoutes_1.default);
app.use('/api/questions', questionRoutes_1.default);
// Connect to MongoDB (Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual connection string)
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
