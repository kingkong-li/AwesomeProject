import People from "./People";
import PropTypes from "prop-types";


export default class Man extends People{

    constructor(props) {
        super(props);


        // 定义状态机
        this.state = {


        };
    }

    static propTypes = {
        sex: PropTypes.string,
    };
    /**
     * 为属性设定默认值
     * @type {{badgeValue: string}}
     */
    static defaultProps = {
        ...People.defaultProps,
        // 下面定义的 默认值会覆盖上面的，跟子父控件无关
        sex:'man',


    };

    componentDidMount(): void {
        console.log("test props");
        console.log(this.props.age);

        console.log("test field");

        console.log(this.weight);

    }

}
