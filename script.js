

const container = document.querySelector('.container');
let scrollPosition = container.scrollLeft
var sideAnimation = document.querySelector('.sideMenu')

//commands to innitally hide the text on page loadup

$('#blackSummerInfo, #covidInfo, #globalWarming2027, \
    #population30Mil, #brisbaneOlympics, #melbourneSydney, \
    #sydneyRenewables, #coalPowerPlant, #aiSingularity, #carbonNeutral, \
    #submarinesArrive, #worldPop9Bil, #worldPop10Bil'
).hide();

// Decides which section to Load onto

const middleSection = document.querySelector('.section:nth-child(1)');
container.scrollLeft = middleSection.offsetLeft - (container.offsetWidth / 2) 
+ (middleSection.offsetWidth / 2);

// functions to change scroll wheels input to horizontal Scrolling

document.addEventListener('wheel', function (event) {
    container.scrollLeft += event.deltaY;
    logScrollPosition();
});

container.addEventListener('scroll', logScrollPosition);

// Function to log the Horizontal Scroll Position

function logScrollPosition() {
    const scrollPosition = container.scrollLeft;
    console.log('Horizontal Scroll Position:', scrollPosition);

    const sideMenu = document.getElementById('sideMenu');

    // If statemenets to determine when to bring out the menu
    if (scrollPosition > window.innerWidth/2) {
        sideMenu.classList.add('sideMenuScrolled');
        sideMenuExtend()
        sideMenuAnimation()
        activeHeader()

    } else {
        // $('.sideMenuScrolled').hide(500)
        sideMenu.classList.remove('sideMenuScrolled');
        oppositeSideMenuExtend()
        $('#menuSelects').hide();
        $('.menuText').hide();
        $('.menuOption').hide();
    }
}

// function to animate the header titles as you scroll
function activeHeader () {
    const activeScrollPosition = container.scrollLeft

    if (activeScrollPosition > window.innerWidth/2 && activeScrollPosition < window.innerWidth*1.5 ) {
        $('.heading2020').animate({
            opacity: '1',
            textAlign: 'center'
        }, 1000);
    }
    
    if (activeScrollPosition > window.innerWidth*1.5 && activeScrollPosition < window.innerWidth*2.5){
        $('.heading2030').animate({
            opacity: '1',
            textAlign: 'center'
        }, 1000);
    }

    if (activeScrollPosition > window.innerWidth*2.5 && activeScrollPosition < window.innerWidth*3.5 ) {
        $('.heading2040').animate({
            opacity: '1',
            textAlign: 'center'
        }, 1000);
    }

    if (activeScrollPosition > window.innerWidth*3.5) {
        $('.heading2050').animate({
            opacity: '1',
            textAlign: 'center'
        }, 1000);
    }    
};

// This function gives the sliding menu its animation
function sideMenuAnimation() {
    if (sideAnimation.classList.contains('sideMenuScrolled')) {
    $('.sideMenuScrolled').animate({
        zIndex: '0'
    })
    $('.sideMenuScrolled').animate({
        padding: '0',
        height: '5vh',
        opacity: '0.7',
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100vw',
        marginTop: '10vh'
    },1000)
    $('#menuSelects').show();
    $('.menuText').show();
    $('.menuOption').show();
    }
//the functions for console logging the side menu 
};
function sideMenuExtend () {
    console.log('Class has been added')                    
};

function oppositeSideMenuExtend() {
    console.log('Class has been removed')
};

function text2020Click(){
    $('#covidInfo, #globalWarming2027, #blackSummerInfo').hide();
    $('.info2020').show();
    $('#section2020 > span').css('bottom', '15vh');
};
function text2030Click(){
    $('#brisbaneOlympics, #submarinesArrive, #population30Mil, \
      #sydneyRenewables, #worldPop9Bil, #melbourneSydney').hide();
    $('.info2030').show();
    $('#section2030 > span').css('bottom', '15vh');
};
function text2040Click(){
    $('#aiSingularity, #coalPowerPlant, #submarinesArrive').hide();
    $('.info2040').show();
    $('#section2040 > span').css('bottom', '15vh')
};
function text2050Click(){
    $('#carbonNeutral, #worldPop10Bil').hide();
    $('.info2050').show();
    $('#section2050 > span').css('bottom', '15vh')
};

function blackSummerMove(){
    $('.info2020, #globalWarming2027, #covidInfo').hide();
    $('#blackSummerInfo').show();
    $('.blackSummerClick').css('bottom', '20vh');
    $('.temp2027Click, .covidClick').css('bottom', '15vh')
};

function covidMove(){
    $('.info2020, #globalWarming2027, #blackSummerInfo').hide();
    $('#covidInfo').show()
    $('.covidClick').css('bottom', '20vh');
    $('.temp2027Click, .blackSummerClick').css('bottom', '15vh')
};
function temp2027Move(){
    $('.info2020, #covidInfo, #blackSummerInfo').hide();
    $('#globalWarming2027').show();
    $('.temp2027Click').css('bottom', '20vh');
    $('.covidClick, .blackSummerClick').css('bottom', '15vh')
};
function sydneyRenewablesMove(){
    $('.info2030, #population30Mil, #brisbaneOlympics, #melbourneSydney, \
      #worldPop9Bil').hide();
    $('#sydneyRenewables').show();
    $('.sydneyRenewablesClick').css('bottom', '20vh');
    $('.olympicsClick, .melbourneClick, .populationClick, \
      .worldPop9BilClick').css('bottom', '15vh')
};
function melbourneMove(){
    $('.info2030, #population30Mil, #sydneyRenewables, #brisbaneOlympics, \
      #worldPop9Bil').hide();
    $('#melbourneSydney').show();
    $('.melbourneClick').css('bottom', '20vh');
    $('.olympicsClick, .sydneyRenewablesClick, .populationClick, \
      .worldPop9BilClick').css('bottom', '15vh')
};
function olympicsMove(){
    $('.info2030, #population30Mil, #sydneyRenewables, #melbourneSydney, \
      #worldPop9Bil').hide();
    $('#brisbaneOlympics').show();
    $('.olympicsClick').css('bottom', '20vh');
    $('.sydneyRenewablesClick, .melbourneClick, .populationClick, \
      .worldPop9BilClick').css('bottom', '15vh')
};
function populationMove(){
    $('.info2030, #brisbaneOlympics, #sydneyRenewables, #melbourneSydney, \
      #worldPop9Bil').hide();
    $('#population30Mil').show();
    $('.populationClick').css('bottom', '20vh');
    $('.olympicsClick, .melbourneClick, .sydneyRenewablesClick, \
      .worldPop9BilClick').css('bottom', '15vh')
};
function worldPop9BilMove(){
    $('.info2030, #population30Mil, #brisbaneOlympics, #melbourneSydney, \
      #sydneyRenewables').hide();
    $('#worldPop9Bil').show();
    $('.worldPop9BilClick').css('bottom', '20vh');
    $('.olympicsClick, .melbourneClick, .populationClick, \
      .sydneyRenewablesClick').css('bottom', '15vh')
};
function submarinesMove(){
    $('.info2040, #coalPowerPlant, #aiSingularity').hide();
    $('#submarinesArrive').show();
    $('.submarinesClick').css('bottom', '20vh');
    $('.powerPlantClick, .singularityClick').css('bottom', '15vh')
};
function powerPlantMove(){
    $('.info2040, #aiSingularity, #submarinesArrive').hide();
    $('#coalPowerPlant').show();
    $('.powerPlantClick').css('bottom', '20vh');
    $('.submarinesClick, .singularityClick').css('bottom', '15vh')
};
function singularityMove(){
    $('.info2040, #coalPowerPlant, #submarinesArrive').hide();
    $('#aiSingularity').show();
    $('.singularityClick').css('bottom', '20vh');
    $('.powerPlantClick, .submarinesClick').css('bottom', '15vh')
};
function carbonMove(){
    $('.info2050, #worldPop10Bil').hide();
    $('#carbonNeutral').show();
    $('.carbonClick').css('bottom', '20vh');
    $('.worldPop10BilClick').css('bottom', '15vh')
};
function worldPop10BilMove(){
    $('.info2050, #carbonNeutral').hide();
    $('#worldPop10Bil').show();
    $('.worldPop10BilClick').css('bottom', '20vh');
    $('.carbonClick').css('bottom', '15vh')
}
